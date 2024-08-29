import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { Recipe } from '@/lib/types/recipe';

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div>
      <Card key={recipe.id} className="flex flex-col justify-between">
        <CardHeader className="flex-row gap-4 items-center">
          <Avatar>
            <AvatarImage src={`img/${recipe.image}`} alt="recipe image" />
            <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription>{recipe.time} mins to cook</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>{recipe.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>View recipe</Button>
          {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
        </CardFooter>
      </Card>
    </div>
  );
};
export default RecipeCard;
