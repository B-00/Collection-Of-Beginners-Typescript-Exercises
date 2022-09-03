export function hey(message: string): string {
  message = message.trim();
  const hasNumbers = /\d/.test(message);
  const hasLetters = /[a-zA-Z]/g.test(message);
  const isUpperCase = (hasNumbers && hasLetters) || !hasNumbers ? message.toLocaleUpperCase() === message : false;

  console.log(isUpperCase, hasLetters, hasNumbers);

  if (message[message.length - 1] === "?" && isUpperCase) {
    return "Calm down, I know what I'm doing!";
  } else if (message[message.length - 1] === "?") {
    return 'Sure.';
  } else if (message.length === 0) {
    return 'Fine. Be that way!'
  } else if (isUpperCase) {
    return 'Whoa, chill out!';
  }

  return 'Whatever.'
}