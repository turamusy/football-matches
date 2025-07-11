import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

/** Функция для обработки входящей ошибки из запроса, для дальнейшего отображения ошибки пользователю.  */
export function handleQuerryErrorType(error: unknown): error is FetchBaseQueryError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error
  );
}