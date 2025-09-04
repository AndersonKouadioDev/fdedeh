import {create} from 'zustand';
import {IQuestion} from "@/features/question/question.type";

interface QuestionStoreState {
	allQuestions: IQuestion[];

	// react query
	isLoading: boolean;
	isError: boolean;
	error: any | null;
	isFetching: boolean;

	setAllQuestions: (questions: IQuestion[]) => void;
	setQueryState: (state: { isLoading: boolean, isError: boolean, error: any, isFetching: boolean }) => void;

	// Utilitaires
	getLatestQuestion: () => IQuestion | undefined;
}

export const useQuestionStore = create<QuestionStoreState>((set, getState) => ({
	allQuestions: [],
	isLoading: false,
	isError: false,
	error: null,
	isFetching: false,

	setAllQuestions: (questions: IQuestion[]) => set({allQuestions: questions}),
	setQueryState: (state) => set(state),

	getLatestQuestion: () => {
		const questions = getState().allQuestions;
		return questions.length > 0 ? questions[questions.length - 1] : undefined;
	},
}));