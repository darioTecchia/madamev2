'use client';

import { CombinedMenu as ICombinedMenu } from '@/models/menu';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Martini } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CombinedMenuProps {
  menu: ICombinedMenu;
}

export default function CombinedMenu({ menu }: CombinedMenuProps) {
  const [selectedGin, setSelectedGin] = useState<string | null>(null);
  const [selectedTonic, setSelectedTonic] = useState<string | null>(null);

  const calculateTotal = () => {
    if (!selectedGin) return 0;
    const gin = menu.items?.find((g) => g.name === selectedGin);
    const tonic = menu.additionalItems?.find((t) => t.name === selectedTonic);
    return (gin?.price || 0) + (tonic?.price || 0);
  };

  return (
    <>
      <Tabs defaultValue="gin-tonic" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-2">
          <TabsTrigger value="gin-tonic">Gin & Tonic</TabsTrigger>
          <TabsTrigger value="martini">Cocktail Martini</TabsTrigger>
        </TabsList>

        <TabsContent value="gin-tonic" className="space-y-8">
          {/* Step 1: Choose Gin */}
          <div>
            <h2 className="mb-4 flex items-center text-2xl font-medium">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
                1
              </span>
              Scegli il tuo gin
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {menu.items?.map((gin) => (
                <Card
                  key={gin.name}
                  className={`cursor-pointer transition-all ${
                    selectedGin === gin.name
                      ? 'border-black shadow-lg'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedGin(gin.name)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-1 text-lg font-medium">{gin.name}</h3>
                        <p className="mb-2 text-sm text-gray-600">
                          {gin.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {gin.notes?.map((botanical, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs"
                            >
                              {botanical}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-xl font-medium">€{gin.price}</p>
                        {gin.origin && (
                          <p className="mt-1 text-xs text-gray-500">
                            <span className={`fi fi-${gin.origin}`}></span>
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Step 2: Choose Tonic */}
          <div>
            <h2 className="mb-4 flex items-center text-2xl font-medium">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
                2
              </span>
              Aggiungi la tonica
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {menu.additionalItems?.map((tonic) => (
                <Card
                  key={tonic.name}
                  className={`cursor-pointer transition-all ${
                    selectedTonic === tonic.name
                      ? 'border-black shadow-lg'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedTonic(tonic.name)}
                >
                  <CardContent className="p-4">
                    <h3 className="mb-1 font-medium">{tonic.name}</h3>
                    <p className="mb-2 text-sm text-gray-600">
                      {tonic.description}
                    </p>
                    <div className="flex items-end justify-between">
                      <p className="text-xs text-gray-500">{tonic.size}</p>
                      <p className="text-lg font-medium">+€{tonic.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          {selectedGin && (
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-medium">Il tuo Gin & Tonic</h3>
              <div className="mb-4 space-y-2">
                <div className="flex justify-between">
                  <span>{selectedGin}</span>
                  <strong>
                    €{menu.items?.find((g) => g.name === selectedGin)?.price}
                  </strong>
                </div>
                {selectedTonic && (
                  <div className="flex justify-between">
                    <span>{selectedTonic}</span>
                    <strong>
                      +€
                      {
                        menu.additionalItems?.find(
                          (t) => t.name === selectedTonic,
                        )?.price
                      }
                    </strong>
                  </div>
                )}
                <div className="flex items-center justify-between border-t pt-2 font-medium">
                  <span>Totale</span>
                  <span className="flex aspect-square h-11 items-center justify-center rounded-full bg-black text-center align-middle text-white">
                    €{calculateTotal()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="martini" className="space-y-8">
          <div className="mb-8 text-center">
            <Martini className="mx-auto mb-4 h-16 w-16" />
            <h2 className="mb-2 text-2xl font-medium">Cocktail Martini</h2>
            <p className="text-gray-600">
              Il classico dei classici, preparato con il gin di tua scelta e
              servito con olive o twist di limone
            </p>
          </div>

          {/* Martini Gin Selection */}
          <div>
            <h3 className="mb-4 text-xl font-medium">
              Scegli il gin per il tuo Martini
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {menu.items?.map((gin) => (
                <Card
                  key={gin.name}
                  className="cursor-pointer transition-all hover:border-gray-400"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-1 text-lg font-medium">{gin.name}</h3>
                        <p className="mb-2 text-sm text-gray-600">
                          {gin.description}
                        </p>
                        {/* <Badge variant="outline" className="text-xs">
                          <Info className="mr-1 h-3 w-3" />
                          Perfetto per Martini
                        </Badge> */}
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-xl font-medium">€8</p>
                        <p className="mt-1 text-xs text-gray-500">Martini</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
