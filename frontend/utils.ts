export const randomGreeting = () => {
  const greetings = ["Hey there, I'm Daniel!", "Howdy, Daniel here!"];
  return greetings[Math.floor(Math.random() * greetings.length)];
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
