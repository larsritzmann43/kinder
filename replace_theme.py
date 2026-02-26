import os

def replace_theme():
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.css')):
                file_path = os.path.join(root, file)
                with open(file_path, 'r') as f:
                    content = f.read()
                
                new_content = content
                new_content = new_content.replace('bg-[#0d3f66]', 'bg-[#7e9a14]')
                new_content = new_content.replace('border-[#0d3f66]', 'border-[#7e9a14]')
                new_content = new_content.replace('text-[#0d3f66]', 'text-[#4a4a49]')
                new_content = new_content.replace('bg-[#0a3150]', 'bg-[#5f740e]')
                
                new_content = new_content.replace('text-[#2a5d84]', 'text-[#7e9a14]')
                
                new_content = new_content.replace('bg-[#4CAF50]', 'bg-[#91a739]')
                new_content = new_content.replace('border-[#4CAF50]', 'border-[#91a739]')
                new_content = new_content.replace('text-[#4CAF50]', 'text-[#91a739]')
                
                new_content = new_content.replace('#0d3f66', '#4a4a49')
                new_content = new_content.replace('#4CAF50', '#91a739')
                new_content = new_content.replace('#a8c6db', '#d8e5a3')
                
                if content != new_content:
                    with open(file_path, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {file_path}")

if __name__ == "__main__":
    replace_theme()
