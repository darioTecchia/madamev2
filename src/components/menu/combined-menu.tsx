'use client';

import { CombinedMenu as ICombinedMenu, MenuItem } from '@/models/menu';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CombinedMenuProps {
  menu: ICombinedMenu;
}

export default function CombinedMenu({ menu }: CombinedMenuProps) {
  const [selectedMainItem, setSelectedMainItem] = useState<MenuItem | null>(
    null,
  );
  const [selectedAdditionalItem, setSelectedAdditionalItem] =
    useState<MenuItem | null>(null);

  const calculateTotal = () => {
    if (!selectedMainItem) return 0;
    return (
      (selectedMainItem?.price || 0) + (selectedAdditionalItem?.price || 0)
    );
  };

  return (
    <>
      <Tabs defaultValue={menu.subMenus[0].id} className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-2">
          {menu.subMenus.map((subMenu) => (
            <TabsTrigger key={subMenu.id} value={subMenu.id}>
              {subMenu.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {menu.subMenus.map((subMenu) => (
          <TabsContent
            key={subMenu.id}
            value={subMenu.id}
            className="space-y-8"
          >
            {subMenu.additionalItems && (
              <>
                <div>
                  <h2 className="mb-4 flex items-center text-2xl font-medium">
                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
                      1
                    </span>
                    {subMenu.mainItemLabel}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {menu.items?.map((item: MenuItem) => (
                      <Card
                        key={item.name}
                        className={`cursor-pointer transition-all ${
                          selectedMainItem?.name === item.name
                            ? 'border-black shadow-lg'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                        onClick={() => setSelectedMainItem(item)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="mb-1 text-lg font-medium">
                                {item.name}
                              </h3>
                              <p className="mb-2 text-sm text-gray-600">
                                {item.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {item.notes?.map((botanical, i) => (
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
                              <p className="text-xl font-medium">
                                €{item.price}
                              </p>
                              {item.origin && (
                                <p className="mt-1 text-xs text-gray-500">
                                  <span
                                    className={`fi fi-${item.origin}`}
                                  ></span>
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 flex items-center text-2xl font-medium">
                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
                      2
                    </span>
                    {subMenu.additionalItemLabel}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {subMenu.additionalItems?.map((additionalItem) => (
                      <Card
                        key={additionalItem.name}
                        className={`cursor-pointer transition-all ${
                          selectedAdditionalItem?.name === additionalItem.name
                            ? 'border-black shadow-lg'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                        onClick={() =>
                          setSelectedAdditionalItem(additionalItem)
                        }
                      >
                        <CardContent className="p-4">
                          <h3 className="mb-1 font-medium">
                            {additionalItem.name}
                          </h3>
                          <p className="mb-2 text-sm text-gray-600">
                            {additionalItem.description}
                          </p>
                          <div className="flex items-end justify-between">
                            <p className="text-xs text-gray-500">
                              {additionalItem.size}
                            </p>
                            <p className="text-lg font-medium">
                              +€{additionalItem.price}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {selectedMainItem && (
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 text-xl font-medium">
                      Il tuo {subMenu.name}
                    </h3>
                    <div className="mb-4 space-y-2">
                      <div className="flex justify-between">
                        <span>{selectedMainItem.name}</span>
                        <strong>€{selectedMainItem.price}</strong>
                      </div>
                      {selectedAdditionalItem && (
                        <div className="flex justify-between">
                          <span>{selectedAdditionalItem.name}</span>
                          <strong>
                            +€
                            {
                              subMenu.additionalItems?.find(
                                (t) => t.name === selectedAdditionalItem.name,
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
              </>
            )}
            {!!!subMenu.additionalItems && (
              <>
                <div className="mb-8 text-center">
                  <h2 className="mb-2 text-2xl font-medium">{subMenu.name}</h2>
                  <p className="text-gray-600">{subMenu.description}</p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-medium">
                    {subMenu.mainItemLabel}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {menu.items?.map((item: MenuItem) => (
                      <Card
                        key={item.name}
                        className="cursor-pointer transition-all hover:border-gray-400"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="mb-1 text-lg font-medium">
                                {item.name}
                              </h3>
                              <p className="mb-2 text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                            <div className="ml-4 text-right">
                              <p className="text-xl font-medium">
                                {(item.price || 0) + subMenu.overPrice}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
