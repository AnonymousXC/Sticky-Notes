import sys

sel = sys.argv[1]
txt = sys.argv[2]


def italic(sel_txt, text):
    f_txt = ""
    italic = False
    is_italic = text.find("<i>")
    is_italic2 = text.find("</i>")
    if is_italic != -1 and is_italic2 != -1:
        italic = True
    
    if italic == True:
        f_txt = text.replace("<i>", " ")
        f_txt = f_txt.replace("</i>", " ")
    else:
        italic = "<i>" + sel_txt + "</i>"
        f_txt = text.replace(sel_txt, italic)
    return f_txt

if sel and txt:
    print(italic(sel, txt))