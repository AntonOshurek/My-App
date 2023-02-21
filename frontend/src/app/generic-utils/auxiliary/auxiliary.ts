export const onEscClickHandler = (evt: any, htmlElement: HTMLElement | null = null): void | boolean => {
  if(evt.keyCode === 13 || evt.keyCode === 'enter') {
    evt.preventDefault();

    if(htmlElement && htmlElement !== null) {
      htmlElement.blur();
    } else {
      return true;
    };
  };
};

export const getZero = (num: number): string => {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  };
};

export const getRandomInt = (count: number): number => {
	return Math.floor(Math.random() * (count + 1));
};
