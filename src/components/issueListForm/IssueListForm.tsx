import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getIssueList } from '../../api/IssueApi';

import styles from './IssueListForm.module.scss';
import AdImage from '../../assets/adimage.png';
import ROUTES from '../../utils/constants/Routes';

export default function IssueListForm() {
	const [issues, setIssues] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	//const [isLoading, setIsLoading] = useState(false);

	const observerRef = useRef(null);

	const navigate = useNavigate();

	useEffect(() => {
		getIssueListData();
	}, []);

	const getIssueListData = async () => {
		try {
			const res = await getIssueList(currentPage);
			// @ts-ignore
			setIssues(prevIssues => [...prevIssues, ...res]);
			setCurrentPage(prevPage => prevPage + 1);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	const lastElementObserver = (node: HTMLElement | null) => {
		if (observerRef.current) {
			// @ts-ignore
			observerRef.current.disconnect();
		}
		// @ts-ignore
		observerRef.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && issues.length < 120) {
				getIssueListData();
			}
		});

		if (node) {
			// @ts-ignore
			observerRef.current.observe(node);
		}
	};

	const handleClickAdImage = () => {
		window.open(`https://www.wanted.co.kr/`, '_blank');
	};

	const handleClickIssue = (issue_number: number) => {
		navigate(`${ROUTES.ISSUEDETAIL}${issue_number}`);
	};

	return (
		<div className={styles.container}>
			<h1>이슈 리스트</h1>
			<ul>
				{issues.map((issue: any, index) =>
					(index + 1) % 5 === 0 ? (
						<li key={index} className={styles.adBox}>
							{index === issues.length - 1 ? (
								<div ref={lastElementObserver}>
									<button className={styles.adImageBtn} onClick={handleClickAdImage}>
										<img className={styles.img} src={AdImage} alt="advertisementImage"></img>
									</button>
								</div>
							) : (
								<button className={styles.adImageBtn} onClick={handleClickAdImage}>
									<img className={styles.img} src={AdImage} alt="advertisementImage"></img>
								</button>
							)}

							<div className={styles.line}></div>
						</li>
					) : (
						<li key={index} className={styles.issueBox}>
							<button onClick={() => handleClickIssue(issue.number)}>
								<div className={styles.issueTitle}>
									<span>#{issue.number}</span>
									<span>{issue.title}</span>
								</div>
								<div className={styles.issueDescription}>
									<span>작성자 : {issue.user.login}</span>
									<span>작성일 : {issue.created_at}</span>
									<span>코멘트 : {issue.comments}</span>
								</div>
							</button>
							<div className={styles.line}></div>
						</li>
					),
				)}
			</ul>
		</div>
	);
}
