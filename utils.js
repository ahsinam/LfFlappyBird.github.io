const getRandomValue = () => {
  return Math.max(
    Math.floor(Math.random(0, 9) * (canvas.height - COLUMN_OFFSET * 2)),
    COLUMN_OFFSET
  );
};
