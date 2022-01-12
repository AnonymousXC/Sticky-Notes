import sys

sel = sys.argv[1]
txt = sys.argv[2]


def bolded(sel_txt, text):
    f_txt = ""
    bolded = False
    is_bolded = text.find("<b>")
    is_bolded2 = text.find("</b>")
    if is_bolded != -1 and is_bolded2 != -1:
        bolded = True
    
    if bolded == True:
        f_txt = text.replace("<b>", " ")
        f_txt = f_txt.replace("</b>", " ")
    else:
        bolded = "<b>" + sel_txt + "</b>"
        f_txt = text.replace(sel_txt, bolded)
    return f_txt

print(bolded(sel, txt))