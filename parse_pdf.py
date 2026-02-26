import fitz
doc = fitz.open("Beratungstool Kinder 03-2026_DIGITAL_fixed2.pdf")

print("Total pages:", len(doc))
for page in doc:
    print(f"--- Page {page.number + 1} ---")
    widgets = page.widgets()
    for w in widgets:
        print(f"Widget: {w.field_name} (Type: {w.field_type_string})")
        if w.script:
            print(f"JS: {w.script}")
        if w.script_calc:
            print(f"Calc JS: {w.script_calc}")
        if w.script_change:
            print(f"Change JS: {w.script_change}")
        if w.script_format:
            print(f"Format JS: {w.script_format}")

