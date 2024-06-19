import replaceTokens, { IReplaceTokensSettings } from '../replaceTokens';

describe('replaceTokens', () => {
  it('should replace tokens in a string', () => {
    const result = replaceTokens('hello [world]', { world: 'Coco' });
    expect(result).toBe('hello Coco');
  });

  it('should use the provided regexp to match tokens', () => {
    const settings: IReplaceTokensSettings = {
      regexp: '\\{([a-zA-Z0-9-_]+)\\}',
    };
    const result = replaceTokens('hello {world}', { world: 'Coco' }, settings);
    expect(result).toBe('hello Coco');
  });

  it('should remove undefined tokens when stripUndefined is true', () => {
    const settings: IReplaceTokensSettings = { stripUndefined: true };
    const result = replaceTokens(
      'hello [world] [foo]',
      { world: 'Coco' },
      settings,
    );
    expect(result).toBe('hello Coco ');
  });

  it('should leave undefined tokens when stripUndefined is false', () => {
    const settings: IReplaceTokensSettings = { stripUndefined: false };
    const result = replaceTokens(
      'hello [world] [foo]',
      { world: 'Coco' },
      settings,
    );
    expect(result).toBe('hello Coco [foo]');
  });
});
