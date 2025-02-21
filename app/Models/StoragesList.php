<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoragesList extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'zona_id',
        'start_level',
        'level_count',
        'start_storage',
        'finish_storage',
    ];
}
