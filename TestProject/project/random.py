import random

target_number = random.randint(1, 100)
attempts = 0

print("1부터 100 사이의 숫자를 맞춰보세요!")

while True:
    try:
        # 사용자로부터 입력 받기
        guess = int(input("숫자를 입력하세요: "))
        attempts += 1

        if guess < target_number:
            print("더 큰 숫자입니다! (UP)")
        elif guess > target_number:
            print("더 작은 숫자입니다! (DOWN)")
        else:
            print(f"축하합니다! {attempts}번 만에 맞추셨습니다.")
            break
            
    except ValueError:
        print("유효한 숫자를 입력해 주세요.")