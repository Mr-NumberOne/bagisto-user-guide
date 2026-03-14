import os
import time
from deep_translator import GoogleTranslator

SRC_DIR = r"e:\RamziProjects\bagisto-installation\Cworks-user-guide\src"
AR_DIR = os.path.join(SRC_DIR, "ar")

translator = GoogleTranslator(source='en', target='ar')

def chunk_text(text, limit=4000):
    lines = text.split('\n')
    chunks = []
    current_chunk = []
    current_length = 0
    for line in lines:
        if current_length + len(line) + 1 > limit:
            chunks.append('\n'.join(current_chunk))
            current_chunk = [line]
            current_length = len(line) + 1
        else:
            current_chunk.append(line)
            current_length += len(line) + 1
    if current_chunk:
        chunks.append('\n'.join(current_chunk))
    return chunks

def translate_file(filepath, outpath):
    os.makedirs(os.path.dirname(outpath), exist_ok=True)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    chunks = chunk_text(content)
    translated_chunks = []
    
    for chunk in chunks:
        if not chunk.strip():
            translated_chunks.append(chunk)
            continue
        try:
            translated = translator.translate(chunk)
            translated_chunks.append(translated)
        except Exception as e:
            print(f"Error translating chunk in {filepath}: {e}")
            translated_chunks.append(chunk) # fallback to original
            time.sleep(2)
    
    with open(outpath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(translated_chunks))

def main():
    for root, dirs, files in os.walk(SRC_DIR):
        if 'public' in root.split(os.sep) or 'ar' in root.split(os.sep) or '.vitepress' in root.split(os.sep):
            continue
            
        for file in files:
            if file.endswith('.md'):
                in_path = os.path.join(root, file)
                rel_path = os.path.relpath(in_path, SRC_DIR)
                out_path = os.path.join(AR_DIR, rel_path)
                
                print(f"Translating {rel_path}...")
                translate_file(in_path, out_path)
                time.sleep(1) # respectful delay

if __name__ == "__main__":
    main()
