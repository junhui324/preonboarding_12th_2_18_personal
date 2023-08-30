import styles from './IssueTitle.module.scss';

export default function IssueTitle({ issue }: any) {
	return (
		<div>
			<div className={styles.issueTitle}>
				<span>#{issue.number}</span>
				<span>{issue.title}</span>
			</div>
			<div className={styles.issueDescription}>
				<span>작성자 : {issue.user.login}</span>
				<span>작성일 : {issue.created_at}</span>
				<span>코멘트 : {issue.comments}</span>
			</div>
			<div className={styles.line}></div>
		</div>
	);
}
