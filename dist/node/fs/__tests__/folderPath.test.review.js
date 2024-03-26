import __folderPath from '../folderPath.js';
describe('sugar.node.fs.folderPath', () => {
    it('Should get a simple folder path correctly', () => {
        const path = __folderPath(`${__dirname}/data/file.jpg`);
        expect(path).toBe(`${__dirname}/data`);
    });
    it('Should return false when checking for a non existing folder', () => {
        const path = __folderPath(`${__dirname}/data/file111.jpg`, {
            checkExistence: true,
        });
        expect(path).toBe(false);
    });
});
//# sourceMappingURL=folderPath.test.review.js.map