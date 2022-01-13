import sys

sel = sys.argv[1]
txt = sys.argv[2]


def underlined(sel_txt, text):
    f_txt = ""
    underlined = False
    is_underlined = text.find("<u>")
    is_underlined2 = text.find("</u>")
    if is_underlined != -1 and is_underlined2 != -1:
        underlined = True
    
    if underlined == True:
        f_txt = text.replace("<u>", " ")
        f_txt = f_txt.replace("</u>", " ")
    else:
        underlined = "<u>" + sel_txt + "</u>"
        f_txt = text.replace(sel_txt, underlined)
    return f_txt

if sel and txt:
    print(underlined(sel, txt))