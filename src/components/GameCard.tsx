import { Game } from "../model/game";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	if (!game.parent_platforms) game.parent_platforms = [];
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)}></Image>
			<CardBody>
				<HStack justifyContent={"space-between"}>
					<PlatformIconList
						platforms={game.parent_platforms?.map((p) => p.platform)}
					></PlatformIconList>
					<CriticScore score={game.metacritic}></CriticScore>
				</HStack>
				<Heading fontSize={"2xl"}>
					{game.name} <Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
