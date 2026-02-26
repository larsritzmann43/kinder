import fitz
doc = fitz.open("Beratungstool Kinder 03-2026_DIGITAL_fixed2.pdf")
for i, page in enumerate(doc):
    print(f"--- PAGE {i+1} ---")
    print(page.get_text())
