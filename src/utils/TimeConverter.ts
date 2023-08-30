interface TimeFormatOptions {
	year?: 'numeric' | '2-digit';
	month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
	day?: 'numeric' | '2-digit';
	hour?: 'numeric' | '2-digit';
	minute?: 'numeric' | '2-digit';
	second?: 'numeric' | '2-digit';
}

export function convertTimestampToFormattedTime(
	timestamp: string,
	options?: TimeFormatOptions,
): string {
	const defaultOptions: TimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	};

	const mergedOptions = { ...defaultOptions, ...options };

	return new Date(timestamp).toLocaleString('ko-KR', mergedOptions);
}
