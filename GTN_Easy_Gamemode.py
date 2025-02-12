import random

def main():
    print("Welcome to Guess The Number\n")
    print("Directions: Guess the mystery number between 0-99. You have 7 guesses\n")

    r = None
    k = 0
    y = random.randint(0, 99)

    while r != y and k < 7:
        r = int(input("Guess the Number!..."))

        if r > y:
            print(f"{r} is greater than the mystery number")
        elif r < y:
            print(f"{r} is less than the mystery number")
        else:
            print("That number is correct!!")

        k += 1

    print("\n")

    if k == 7:
        print(f"It took you {k} tries")
        print(f"The mystery number is {y}")
        print("Game Over\n")
    else:
        print(f"It took you {k} tries\n")
        if k > 6:
            print("Great Job!")
        else:
            if k > 1:
                print("Excellent")
            else:
                print("Magnificent")

            a = int(input("Play Again? If yes press 1, if not press any number except 1\n"))
            if a == 1:
                main()

if __name__ == "__main__":
    main()

