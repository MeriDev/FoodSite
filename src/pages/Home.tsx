import { useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Recipes {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

function Home() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch('http://localhost:4000/recipes');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Recipes[] = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <nav>
        <h1>Recipes for Ninjas</h1>
      </nav>

      <main>
        <div className="grid grid-cols-3 gap-8">
          {recipes.map(recipe => (
            <Card>
              <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={`../../public/img/${recipe.image}`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
