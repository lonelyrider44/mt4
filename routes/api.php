<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('mesto',\App\Http\Controllers\MestoController::class);
Route::apiResource('izdavac',\App\Http\Controllers\IzdavacController::class);
Route::apiResource('knjiga',\App\Http\Controllers\KnjigaController::class);
Route::apiResource('skola',\App\Http\Controllers\SkolaController::class);
Route::apiResource('predmet',\App\Http\Controllers\PredmetController::class);
Route::apiResource('zadatak',\App\Http\Controllers\ZadatakController::class);
Route::apiResource('dokument',\App\Http\Controllers\DokumentController::class);
Route::apiResource('test',\App\Http\Controllers\TestController::class);
Route::apiResource('korisnik',\App\Http\Controllers\KorisnikController::class);
Route::apiResource('nivo_obrazovanja',\App\Http\Controllers\NivoObrazovanjaController::class);
