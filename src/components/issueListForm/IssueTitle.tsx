import styles from './IssueTitle.module.scss';
import { convertTimestampToFormattedTime } from '../../utils/TimeConverter';

export default function IssueTitle({ issue }: any) {
	const formattedTime = convertTimestampToFormattedTime(issue.created_at);

	return (
		<div>
			<div className={styles.issueTitle}>
				<span>#{issue.number}</span>
				<span>{issue.title}</span>
			</div>
			<div className={styles.issueDescription}>
				<span>작성자 : {issue.user.login}</span>
				<span>작성일 : {formattedTime}</span>
				<span>코멘트 : {issue.comments}</span>
			</div>
			<div className={styles.line}></div>
		</div>
	);
}
