import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getIssue } from '../../api/IssueApi';
import LoadingSpinner from '../loading/Loading';

import ReactMarkdown from 'react-markdown';

export default function IssueDetailForm() {
	const [issue, setIssue] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(false);
	const { number } = useParams();

	useEffect(() => {
		if (number) {
			getIssueData();
		}
	}, []);

	const getIssueData = async () => {
		setIsLoading(true);
		try {
			const res = await getIssue(Number(number));
			setIssue(res);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<h1>이슈 상세 페이지</h1>
			{!isLoading && issue ? (
				<div>
					<div>
						작성자 프로필 이미지 : <img src={issue.user.avatar_url} alt="프로필 이미지" />
					</div>
					<div>이슈 번호 : {number}</div>
					<div>이슈 제목 : {issue.title}</div>
					<div>작성자 : {issue.user.login}</div>
					<div>작성일 : {issue.created_at}</div>
					<div>코멘트 : {issue.comments}</div>
					<div>
						본문 : <ReactMarkdown children={issue.body}></ReactMarkdown>
					</div>
				</div>
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
}
