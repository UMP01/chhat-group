<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chhatgroupblog', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('content');
            $table->string('author');
            $table->date('dateposted');
            $table->string('tags');
            $table->string('media');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chhatgroupblog');
    }
};
