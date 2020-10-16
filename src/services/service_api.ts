import { questionType, quiz } from '../quiz_types/quiz_type'

export const getQuizDetail = async (questionNumber: Number, level: string) => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${questionNumber}&difficulty=${level}`);
    let data = await res.json();
    let { results } = data;
    console.log(results);
    {
        results.map(() => {
            
        })
    }
}