#!/usr/bin/env bash
set -euo pipefail

# Base folders
BASE_DIR="$(pwd)"

# Input folders
INPUT_PAINTINGS="${BASE_DIR}/import-paintings"
OUTPUT_PAINTINGS="${BASE_DIR}/paintings"

INPUT_ILLUSTRATIONS="${BASE_DIR}/import-illustrations"
OUTPUT_ILLUSTRATIONS="${BASE_DIR}/illustrations"

# Pick ImageMagick binary (IM v7: magick, IM v6: convert)
if command -v magick >/dev/null 2>&1; then
  IM="magick"
else
  IM="convert"
fi

# Common function to process inputs and outputs with preview renaming and optimization
process_folder() {
  local input_dir=$1
  local output_dir=$2

  mkdir -p "$output_dir"

  echo "Processing folder: $input_dir"

  # Generate previews for *_main.jpg/jpeg with _main replaced by _preview in output folder
  find "$input_dir" -maxdepth 1 -type f \( -iname "*_main.jpg" -o -iname "*_main.jpeg" \) -print0 \
  | while IFS= read -r -d '' f; do
      base="$(basename "$f")"
      preview_name="${base/_main/_preview}"
      echo "Generating preview: $preview_name"
      "$IM" "$f" -resize "500x500>" -strip -interlace Plane -quality 80 "$output_dir/$preview_name"
  done

  # Copy originals for optimization (unmodified names)
  find "$input_dir" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 \
  | while IFS= read -r -d '' f; do
      base="$(basename "$f")"
      cp -f "$f" "$output_dir/$base"
  done

  # Optimize all JPEGs (previews + views) losslessly in output folder
  echo "Optimizing JPEGs in $output_dir..."
  find "$output_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 \
  | xargs -0 -P "$(nproc)" -n 50 jpegoptim --strip-all --preserve --quiet
}

# Run for paintings
process_folder "$INPUT_PAINTINGS" "$OUTPUT_PAINTINGS"

# Run for illustrations
process_folder "$INPUT_ILLUSTRATIONS" "$OUTPUT_ILLUSTRATIONS"

echo "All done."
