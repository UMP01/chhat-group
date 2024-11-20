<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id', 255)->primary();  
            $table->unsignedBigInteger('user_id')->nullable();  
            $table->text('payload'); 
            $table->integer('last_activity');  
            $table->string('user_agent', 255)->nullable();  
            $table->string('ip_address', 255)->nullable();  
            $table->timestamps();  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
};
