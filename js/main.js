

const dataId = githubData.find(data => {
      return data.id === "8030403992";
});

console.log(`${dataId}`);
const message = dataId.payload.commits[0].message;

console.log(`data message: ${message}}`);
