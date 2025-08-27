import { useEffect, useState } from "react";
import axios from 'axios';
import { DateFilter } from "@/hook";
import { Input } from "@/components/ui";

function Search() {
    interface NewData {
        title: string;
        description: string;
        pubDate: string;
        link?: string;
        originallink?: string;
    }
    const [ error, setError ] = useState<string | null>(null);
    const [ data, setData] = useState<Array<NewData>>([]);
    const [ search, setSearch ] = useState<string>('이주환');

    const handleKeyEnter = (event) => {
        if(event.key === 'Enter') {
            setSearch(event.target.value);
        }
    }

    useEffect(() => {
        const callApi = async () => {
            try {
                const clientId = import.meta.env.VITE_CLIENT_ID;
                const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
                const query = encodeURIComponent(search);
                const url = `/v1/search/news.json?query=${query}`;
                
                const response = await axios.get(url, {
                    headers: {
                        'X-Naver-Client-Id': clientId,
                        'X-Naver-Client-Secret': clientSecret
                    }
                });
                console.log(response.data.items);
                if( response.status === 200) {
                    setData(response.data.items);
                } else {
                    console.log('response error');
                }
            } catch (er) {
                if(er instanceof Error) {
                    setError(er.message);
                    console.error('API 호출 중 오류 발생: ', er.message);
                } else {
                    setError('알 수 없는 오류가 발생했습니다.');
                    console.error('API 호출 중 오류 발생:', error);
                }
            }
        };
        callApi();
    }, [search]);

    // 에러 상태를 UI에 표시할 수 있습니다.
    if (error) {
        return <div>오류가 발생했습니다: {error}</div>;
    }

    return (
        <div>
            <div className="flex items-center">
                <Input type="text" placeholder="뉴스 키워드를 검색하세요." onKeyDown={handleKeyEnter}/>
            </div>
            <div className="search p-2.5">
                {
                    data.length > 0 ? data.map((item, index: number) => 
                        (
                            <ul key={index+1} className="mb-2">
                                <li dangerouslySetInnerHTML={{ __html: item.title }} />
                                <li dangerouslySetInnerHTML={{ __html: item.description }} />
                                <li>{DateFilter(item.pubDate)}</li>
                            </ul>
                        )) : <div>데이터 없음</div>
                }
            </div>
        </div>
    );
}

export default Search;