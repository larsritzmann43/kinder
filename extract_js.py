import fitz
try:
    doc = fitz.open("Beratungstool Kinder 03-2026_DIGITAL_fixed2.pdf")
    print("Pages:", len(doc))
    for page in doc:
        for widget in page.widgets():
            if widget.script:
                print(f"Page {page.number} | Field: {widget.field_name} | JS:\n{widget.script}\n---")
except ImportError:
    print("PyMuPDF (fitz) not found.")
