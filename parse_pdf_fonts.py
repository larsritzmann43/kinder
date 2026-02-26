import fitz

def extract_pdf_styles():
    doc = fitz.open("Beratungstool Kinder 03-2026_DIGITAL_fixed2.pdf")

    fonts = set()
    colors = set()

    for page in doc:
        for block in page.get_text("dict")["blocks"]:
            if block['type'] == 0:  # text
                for line in block["lines"]:
                    for span in line["spans"]:
                        fonts.add(span["font"])
                        c = span["color"]
                        hex_color = "#{:06x}".format(c)
                        colors.add(hex_color)

    print("Fonts:", fonts)
    print("Colors:", colors)

if __name__ == "__main__":
    extract_pdf_styles()
