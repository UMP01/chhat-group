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
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('location');
            $table->date('deadline');
            $table->string('jobtype');
            $table->string('salary');
            $table->text('requirement')->nullable(); // Make nullable
            $table->text('responsible')->nullable(); // Make nullable
            $table->text('benefit')->nullable(); // Make nullable
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('careers');
    }
};
