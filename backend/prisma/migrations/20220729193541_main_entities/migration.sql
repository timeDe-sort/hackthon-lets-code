-- CreateTable
CREATE TABLE "service_centers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_centers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donators" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "donators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mother_name" TEXT NOT NULL,
    "family_code" TEXT NOT NULL,
    "service_center_id" INTEGER NOT NULL,
    "period" TEXT[],

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteers" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "university" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "service_center_id" INTEGER NOT NULL,
    "period" TEXT[],

    CONSTRAINT "volunteers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_center_address" (
    "id" SERIAL NOT NULL,
    "service_center_id" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "address_complement" TIMESTAMP(3) NOT NULL,
    "city_id" INTEGER NOT NULL,

    CONSTRAINT "service_center_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donator_address" (
    "id" SERIAL NOT NULL,
    "donator_id" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "address_complement" TIMESTAMP(3) NOT NULL,
    "city_id" INTEGER NOT NULL,

    CONSTRAINT "donator_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_address" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "address_complement" TIMESTAMP(3) NOT NULL,
    "city_id" INTEGER NOT NULL,

    CONSTRAINT "student_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer_address" (
    "id" SERIAL NOT NULL,
    "volunteer_id" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "address_complement" TIMESTAMP(3) NOT NULL,
    "city_id" INTEGER NOT NULL,

    CONSTRAINT "volunteer_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donations" (
    "id" SERIAL NOT NULL,
    "donator_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "service_center_id" INTEGER NOT NULL,
    "support_type" TEXT[],

    CONSTRAINT "donations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "service_centers_cnpj_key" ON "service_centers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "service_centers_email_key" ON "service_centers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "donators_document_key" ON "donators"("document");

-- CreateIndex
CREATE UNIQUE INDEX "donators_email_key" ON "donators"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_cpf_key" ON "students"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "volunteers_cpf_key" ON "volunteers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "volunteers_email_key" ON "volunteers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "service_center_address_number_key" ON "service_center_address"("number");

-- CreateIndex
CREATE UNIQUE INDEX "donator_address_number_key" ON "donator_address"("number");

-- CreateIndex
CREATE UNIQUE INDEX "student_address_number_key" ON "student_address"("number");

-- CreateIndex
CREATE UNIQUE INDEX "volunteer_address_number_key" ON "volunteer_address"("number");

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_service_center_id_fkey" FOREIGN KEY ("service_center_id") REFERENCES "service_centers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteers" ADD CONSTRAINT "volunteers_service_center_id_fkey" FOREIGN KEY ("service_center_id") REFERENCES "service_centers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_center_address" ADD CONSTRAINT "service_center_address_service_center_id_fkey" FOREIGN KEY ("service_center_id") REFERENCES "service_centers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_center_address" ADD CONSTRAINT "service_center_address_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donator_address" ADD CONSTRAINT "donator_address_donator_id_fkey" FOREIGN KEY ("donator_id") REFERENCES "donators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donator_address" ADD CONSTRAINT "donator_address_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_address" ADD CONSTRAINT "student_address_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_address" ADD CONSTRAINT "student_address_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer_address" ADD CONSTRAINT "volunteer_address_volunteer_id_fkey" FOREIGN KEY ("volunteer_id") REFERENCES "volunteers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteer_address" ADD CONSTRAINT "volunteer_address_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_donator_id_fkey" FOREIGN KEY ("donator_id") REFERENCES "donators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_service_center_id_fkey" FOREIGN KEY ("service_center_id") REFERENCES "service_centers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
