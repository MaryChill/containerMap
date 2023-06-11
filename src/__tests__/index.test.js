import ErrorRepository from '../index';

test('check error 1', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(1)).toEqual('Не подходящее имя');
});

test('check unknown error', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(3)).toEqual('Unknown error');
});
