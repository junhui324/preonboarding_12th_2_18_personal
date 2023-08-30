import * as Api from './Api';
import URL_INFO from './../utils/constants/Url';

const API_URL = `https://api.github.com/repos/${URL_INFO.ORGANIZATION_NAME}/${URL_INFO.REPOSITORY_NAME}`;

export async function getIssueList(currentPage: number): Promise<any> {
	const params = `issues`;
	const query = `?per_page=30&page=${currentPage}&sort=comments`;
	return await Api.get(API_URL, params, true, query);
}

export async function getIssue(issue_number: number): Promise<any> {
	const params = `issues/${issue_number}`;
	return await Api.get(API_URL, params, true);
}
