a = 1
b = 2
c = 3
d = 4

# region start 먼저 최대값을 찾는다.
max_value = max(a, b, c, d)
print(f"최대값[{max_value}]")
# region end 먼저 최대값을 찾는다.

# region start 최대값을 저장하고 있는 변수를 찾는다.
max_variable = ""

if max_value == a:
    if len(max_variable) > 0:
        max_variable += ", "
    max_variable += "a"

if max_value == b:
    if len(max_variable) > 0:
        max_variable += ", "
    max_variable += "b"

if max_value == c:
    if len(max_variable) > 0:
        max_variable += ", "
    max_variable += "c"

if max_value == d:
    if len(max_variable) > 0:
        max_variable += ", "
    max_variable += "d"

print(f"최대값을 저장하고 있는 변수[{max_variable}]")
# region start 최대값을 저장하고 있는 변수를 찾는다.
