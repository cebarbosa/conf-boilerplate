# -*- coding: utf-8 -*-
""" 

Created on 20/03/18

Author : Carlos Eduardo Barbosa

Produces table with schedule

"""
from __future__ import print_function, division

if __name__ == "__main__":
    with open("SPAnet_schedule.tsv", "rb") as f:
        text = f.read()
    schedule = ["\tschedule: ["]
    for line in text.split("\n"):
        fields = line.strip().split("\t")
        print(fields)
        if len(fields) < 2:
            continue
        if len(fields) == 2 :
            s = '\t{{\n\tname : "{0[1]}",\n\ttime: "{0[0]}"\n\t}},'.format(
                fields)
            schedule.append(s)
        else:
            s = ["{", 'name: "{}",'.format(fields[2]),
                 'company: "{}",'.format(fields[3]),
                 """link: {href: "", text: "" },""", "presentation: {",
                 'title: "{}",'.format(fields[2]),
                 'description: "{}",'.format(fields[1]),
                 'time: "{}"'.format(fields[0]),
                 '}', "},"]

            schedule.append("\n\t".join(s))

    schedule.append("\t],")
    with open("schedule.txt", "w") as f:
        f.write("\n\n".join(schedule))

