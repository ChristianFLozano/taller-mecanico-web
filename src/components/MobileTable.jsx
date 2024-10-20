import React from "react";
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

function MobileTable({ datas, handleDeleteSubmit, openEditPopup, type }) {
    // Capitalize the first character of each word
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="xl:hidden space-y-6">
            {datas && datas.map((data) => (
                <div key={data.id} className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                            Detalles de {type} con ID: {data.id}
                        </h3>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700">
                        <dl>
                            {Object.entries(data).map(([key, value], idx) => (
                                key !== 'id' && (
                                    <div
                                        key={`${data.id}-${key}`}
                                        className={`${
                                            idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'
                                        } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                                    >
                                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300 capitalize">
                                            {capitalizeFirstLetter(key)}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                            {key === 'color' ? (
                                                <div
                                                    className="w-6 h-6 inline-block rounded-full border"
                                                    style={{ backgroundColor: value }}
                                                    title={value}
                                                />
                                            ) : (
                                                value
                                            )}
                                        </dd>
                                    </div>
                                )
                            ))}
                        </dl>
                        <div className="flex justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <div className="flex items-center">
                                <span className="mr-2 dark:text-white">Editar:</span>
                                <button 
                                    onClick={() => openEditPopup(data)} 
                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                    aria-label={`Editar ${type} con ID ${data.id}`}
                                >
                                    <EditIcon />
                                </button>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2 dark:text-white">Eliminar:</span>
                                <button 
                                    onClick={() => handleDeleteSubmit(data)} // Pass the entire row object
                                    className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                    aria-label={`Eliminar ${type} con ID ${data.idPieza || data.id}`} // Use idPieza for piezas and id for users
                                    >
                                    <DeleteIcon />
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MobileTable;
