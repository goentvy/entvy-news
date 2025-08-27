export function DateFilter(date: string) {
    return new Date(date).toLocaleDateString('ko-KR', 
                {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }) + ' ' + new Date(date).toLocaleTimeString('ko-KR',
                {
                    hour: "numeric", 
                    minute: "numeric", 
                    second: "numeric"
                });
}