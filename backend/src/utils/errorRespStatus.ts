const errorRespStatus = (status: number, errorCode: string, errorDescription: string) => ({status, error_code: errorCode, error_description: errorDescription})

export default errorRespStatus;