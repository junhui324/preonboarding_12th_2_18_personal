import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getIssueList } from '../../api/IssueApi';

import styles from './IssueListForm.module.scss';
import AdImage from '../../assets/adimage.png';
import ROUTES from '../../utils/constants/Routes';
import LoadingSpinner from '../loading/Loading';
import IssueTitle from './IssueTitle';

export default function IssueListForm() {
	const [issues, setIssues] = useState<any>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const observerRef = useRef<any>(null);

	const navigate = useNavigate();

	useEffect(() => {
		getIssueListData();
	}, []);

	const getIssueListData = async () => {
		setIsLoading(true);
		try {
			const res = await getIssueList(currentPage);
			// @ts-ignore
			setIssues(prevIssues => [...prevIssues, ...res]);
			setCurrentPage(prevPage => prevPage + 1);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	const lastElementObserver = (node: HTMLElement | null) => {
		if (observerRef.current) {
			observerRef.current.disconnect();
		}
		observerRef.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				getIssueListData();
			}
		});

		if (node) {
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
				{issues.map((issue: any, index: number) => (
					<React.Fragment key={index}>
						{index > 0 && index % 4 === 0 && (
							<li className={styles.adBox}>
								<button className={styles.adImageBtn} onClick={handleClickAdImage}>
									<img className={styles.img} src={AdImage} alt="advertisementImage" />
								</button>
								<div className={styles.line}></div>
							</li>
						)}
						<li className={styles.issueBox}>
							<button onClick={() => handleClickIssue(issue.number)}>
								<IssueTitle issue={issue} />
							</button>
						</li>
					</React.Fragment>
				))}
			</ul>
			<div ref={lastElementObserver}></div>
			{isLoading ? <LoadingSpinner /> : null}
		</div>
	);
}
