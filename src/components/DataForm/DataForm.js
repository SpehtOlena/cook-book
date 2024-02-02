import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import './DataForm.css'

const DataForm = ({ data }) => {
	return (
		<div className={"data-container"}>
			{!!data.length && data.map((value, index) => (
				<Card sx={{ maxWidth: 345 }} key={index}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="240"
							image={value.photo}
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{value.username}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{value.email}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			))
			}
		</div>
	)
}
export default DataForm