import comoAyudarJson from '../text/comoAyudar.json';

const comoAyudar = () => {
	const renderComoAyudar = (arr) => {
		return arr.map((textObj) => {
			return (
				<>
					<h1 id={textObj.id}>{textObj.title}</h1>
					<p>{textObj.content}</p>
				</>
			);
		});
	};
	return <div className="comoAyudar">{renderComoAyudar(comoAyudarJson)}</div>;
};
export default comoAyudar;
