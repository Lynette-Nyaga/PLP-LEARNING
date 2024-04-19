void main() {
  int num = 1;

  while (num <= 100) {
    print(num);
    if (num % 3 == 0 && num % 5 == 0) {
      print('$num.FIZZBUZZ');
    } else if (num % 3 == 0) {
      print('$num. FIZZ');
    } else if (num % 5 == 0) {
      print('$num. Buzz');
    }
    num++;
  }
}
