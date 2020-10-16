export const getQuizDetail = async (questionNumber: Number, level: string) => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${questionNumber}&difficulty=${level}`);
    let data = await res.json();
    console.log(data)
}