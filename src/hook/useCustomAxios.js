import axios from "axios";
import { useEffect, useState } from "react";

const useCustomAxios = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getData = () => {
			setLoading(true)

			axios
				.get(url)
				.then(res => {
					setData(res.data)
					setLoading(false)
				})
				.catch(e => {
					setError(e)
					setLoading(false)
				})
		}
		getData()
	}, [url])
	return { data, loading, error }
}

export default useCustomAxios