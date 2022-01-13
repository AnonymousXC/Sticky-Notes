import sys

sel = sys.argv[1]
txt = sys.argv[2]


def striked(sel_txt, text):
    f_txt = ""
    striked = False
    is_striked = text.find("<strike>")
    is_striked2 = text.find("</strike>")
    if is_striked != -1 and is_striked2 != -1:
        striked = True
    
    if striked == True:
        f_txt = text.replace("<strike>", " ")
        f_txt = f_txt.replace("</strike>", " ")
    else:
        striked = "<strike>" + sel_txt + "</strike>"
        f_txt = text.replace(sel_txt, striked)
    return f_txt

if sel and txt:
    print(striked(sel, txt))